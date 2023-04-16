import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
  } from "typeorm";
  import { Sistema } from "./sistema";
  import { Perfilsistema } from "./perfilsistema";
  
  @Index("perfil_pkey", ["idperfil"], { unique: true })
  @Index("fki_fk_sisperfil", ["idsistema"], {})
  @Entity("perfil", { schema: "seguranca" })
  export class Perfil {
	@Column("integer", { name: "idsistema", default: () => "0" })
	idsistema: number;
  
	@PrimaryGeneratedColumn({ type: "integer", name: "idperfil" })
	idperfil: number;
  
	@Column("character varying", {
	  name: "perfil",
	  nullable: true,
	  length: 15,
	  default: () => "NULL::character varying",
	})
	perfil: string | null;
  
	@Column("integer", { name: "status", default: () => "0" })
	status: number;
  
	@Column("text", { name: "objetivo", nullable: true })
	objetivo: string | null;
  
	@ManyToOne(() => Sistema, (sistema) => sistema.perfils)
	@JoinColumn([{ name: "idsistema", referencedColumnName: "idsistema" }])
	sistema: Sistema;
  
	@OneToMany(() => Perfilsistema, (perfilsistema) => perfilsistema.idperfil)
	perfilsistemas: Perfilsistema[];
  }