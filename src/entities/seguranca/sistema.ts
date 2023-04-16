import {
	Column,
	Entity,
	Index,
	OneToMany,
	PrimaryGeneratedColumn,
  } from "typeorm";
  import { Modulomenu } from "./modulomenu";
  import { Perfil } from "./perfil";
  import { Perfilsistema } from "./perfilsistema";
  
  @Index("sistema_pkey", ["idsistema"], { unique: true })
  @Entity("sistema", { schema: "seguranca" })
  export class Sistema {
	@PrimaryGeneratedColumn({ type: "integer", name: "idsistema" })
	idsistema: number;
  
	@Column("character", {
	  name: "nomesistema",
	  nullable: true,
	  length: 50,
	  default: () => "NULL::bpchar",
	})
	nomesistema: string | null;
  
	@Column("character", {
	  name: "sigla",
	  nullable: true,
	  length: 12,
	  default: () => "NULL::bpchar",
	})
	sigla: string | null;
  
	@Column("character", { name: "versao", length: 3, default: () => "'1.0'" })
	versao: string;
  
	@Column("character", {
	  name: "url",
	  nullable: true,
	  length: 100,
	  default: () => "NULL::bpchar",
	})
	url: string | null;
  
	@Column("integer", { name: "status", default: () => "0" })
	status: number;
  
	@OneToMany(() => Modulomenu, (modulomenu) => modulomenu.sistema)
	modulomenus: Modulomenu[];
  
	@OneToMany(() => Perfil, (perfil) => perfil.sistema)
	perfils: Perfil[];
  
	@OneToMany(() => Perfilsistema, (perfilsistema) => perfilsistema.sistema)
	perfilsistemas: Perfilsistema[];
  }