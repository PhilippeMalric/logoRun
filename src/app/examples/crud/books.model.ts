import { EntityState } from '@ngrx/entity';
import { User } from '@app/core/auth/user.model';


export class Vote{

nom:string;
niveauDaccord:number;
commentaire:string

constructor(nom:string, niveauDaccord:number, commentaire:string){
  this.nom = nom;
  this.niveauDaccord = niveauDaccord;
  this.commentaire = commentaire;

}

}

export class Logo {
  id: string;
  texte: string;
  url_img: string;
  style?:string;
  aimez?:boolean;
  niveauDaccord: number;
  commentaire: string

  constructor( id: string,texte: string,url_img:string,niveauDaccord= 0,style:string="",aimez=false, commentaire=""){

    this.id = id;
    this.texte = texte
    this.url_img = url_img
    this.style = style
    this.aimez = aimez
    this.niveauDaccord = niveauDaccord
    this.commentaire = commentaire
  }

}

export interface LogoState extends EntityState<Logo> {}

