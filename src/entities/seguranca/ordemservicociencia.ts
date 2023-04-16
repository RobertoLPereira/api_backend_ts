import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
  } from "typeorm";
  import { Ordemservicocorpo } from "./ordemservico";
  
  @Index("fki_fk_os", ["idordemservico"], {})
  @Index("ordemservicociencia_pkey", ["idordemservicociencia"], { unique: true })
  @Entity("ordemservicociencia", { schema: "seguranca" })
  export class Ordemservicociencia {
	@PrimaryGeneratedColumn({ type: "integer", name: "idordemservicociencia" })
	idordemservicociencia: number;
  
	@Column("integer", { name: "idordemservico", default: () => "0" })
	idordemservico: number;
  
	@Column("integer", { name: "idpessoa", default: () => "0" })
	idpessoa: number;
  
	@Column("character", {
	  name: "codigousuariorede",
	  nullable: true,
	  length: 30,
	  default: () => "NULL::bpchar",
	})
	codigousuariorede: string | null;
  
	@Column("date", { name: "dataciencia", default: () => "'2018-01-01'" })
	dataciencia: string;
  
	@Column("integer", { name: "status", default: () => "0" })
	status: number;
  
	@ManyToOne(
	  () => Ordemservicocorpo,
	  (ordemservicocorpo) => ordemservicocorpo.ordemservicociencias
	)
	@JoinColumn([
	  { name: "idordemservico", referencedColumnName: "idordemservico" },
	])
	idordemservico2: Ordemservicocorpo;
  }
  