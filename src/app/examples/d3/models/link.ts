import { Node } from './';

export class Link implements d3.SimulationLinkDatum<Node> {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;

  // must - defining enforced implementation properties
  source: any;
  target: any;
  arrow: number | null;

  constructor(source, target, arrow) {
    this.source = source;
    this.target = target;
    this.arrow = arrow;
  }
}
