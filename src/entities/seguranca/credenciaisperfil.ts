import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
  } from "typeorm";
  import { Perfilsistema } from "./perfilsistema";
  
  @Index("pk_credenciais", ["idcredenciais"], { unique: true })
  @Index("fki_fk_perfilcred", ["idperfilsistema"], {})
  @Entity("credenciaisperfil", { schema: "seguranca" })
  export class Credenciaisperfil {
	@PrimaryGeneratedColumn({ type: "integer", name: "idcredenciais" })
	idcredenciais: number;
  
	@Column("integer", { name: "idperfilsistema", default: () => "0" })
	idperfilsistema: number;
  
	@Column("integer", {
	  name: "idtransacoes",
	  nullable: true,
	  default: () => "0",
	})
	idtransacoes: number | null;
  
	@Column("integer", { name: "idsubtransacao", default: () => "0" })
	idsubtransacao: number;
  
	@Column("integer", { name: "status", default: () => "0" })
	status: number;
  
	@Column("text", { name: "motivorecusa", nullable: true })
	motivorecusa: string | null;
  
	@ManyToOne(
	  () => Perfilsistema,
	  (perfilsistema) => perfilsistema.credenciaisperfils
	)
	@JoinColumn([
	  { name: "idperfilsistema", referencedColumnName: "idperfilsistema" },
	])
	perfilsistema: Perfilsistema;
  }
  