import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { D3Service, ForceDirectedGraph, Node, Link } from '../../d3';
import { DataService } from '@app/examples/gears/data.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { Store, select } from '@ngrx/store';
import { State } from '@app/examples/examples.state';
import { selectAllBooks } from '@app/examples/crud/books.selectors';
import { ActionBooksLikeOne } from '@app/examples/crud/books.actions';


@Component({
  selector: 'app-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'graph.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  nodes;
  links: Link[];
  graph: ForceDirectedGraph;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  public _options: { width, height } = { width: 400, height: 400 };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef, private dataS:DataService,public store: Store<State>) {}

  ngOnInit() {



  }

  ngAfterViewInit() {

    this.store.pipe(select(selectAllBooks)).subscribe(
      (logos)=>{
        console.log(logos)

        this.nodes = logos.map((logo,i)=>new Node(logo.id,logo.url_img,logo.texte,logo.niveauDaccord));
        this.links = [];
        /** Receiving an initialized simulated graph from our custom d3 service */

        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
        this.graph.initSimulation(this.options)

        this.graph.ticker.subscribe((d) => {
          this.ref.markForCheck();
    });

      }
    )
    //this.d3Service.createNodeLabels(this.nodes)

  }

  clickButton() {

    console.log(this.nodes)
    console.log(this.links)

    this.nodes = this.nodes.slice(0,this.nodes.length -1)
    this.links = this.links.slice(0,this.links.length -1)
    this.links[this.links.length-1].target = 0
    this.graph = this.d3Service.changeForceDirectedGraph(this.nodes, this.links);


    this.d3Service.click(this.nodes,this.links, this.options)
  }

  clickButton2() {

    console.log(this.nodes)
    console.log(this.links)

    let node : Node = new Node(this.nodes.length-1,"","",0)


    this.nodes.push(node)
    this.links.push(new Link(this.links.length -1,0,0))
    this.links[this.links.length-2].target = this.nodes[this.links.length-1]
    this.graph = this.d3Service.changeForceDirectedGraph(this.nodes, this.links);

    node.x = this.options.width / 2
    node.y = this.options.height / 2

    //this.d3Service.click(this.nodes,this.links, this.options)
  }

  get options() {
    return this._options = {
      width: window.innerWidth-50,
      height: window.innerHeight-200
    };
  }




}
