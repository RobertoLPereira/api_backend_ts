import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
  } from "typeorm";
  import { Ordemservicocorpo } from "./ordemservico";
  import { Perfilsistema } from "./perfilsistema";
  
  @Index("fki_fk_osperfil", ["idordemservico"], {})
  @Index("ordemservicoperfil_pkey", ["idordemservicoperfil"], { unique: true })
  @Index("fki_fk_osperfilsis", ["idperfilsistema"], {})
  @Entity("ordemservicoperfil", { schema: "seguranca" })
  export class Ordemservicoperfil {
	@PrimaryGeneratedColumn({ type: "integer", name: "idordemservicoperfil" })
	idordemservicoperfil: number;
  
	@Column("integer", { name: "idordemservico", default: () => "0" })
	idordemservico: number;
  
	@Column("integer", { name: "idperfilsistema", default: () => "0" })
	idperfilsistema: number;
  
	@ManyToOne(
	  () => Ordemservicocorpo,
	  (ordemservicocorpo) => ordemservicocorpo.ordemservicoperfils
	)
	@JoinColumn([
	  { name: "idordemservico", referencedColumnName: "idordemservico" },
	])
	idordemservico2: Ordemservicocorpo;
  
	@ManyToOne(
	  () => Perfilsistema,
	  (perfilsistema) => perfilsistema.ordemservicoperfils
	)
	@JoinColumn([
	  { name: "idperfilsistema", referencedColumnName: "idperfilsistema" },
	])
	idperfilsistema2: Perfilsistema;
  }
  