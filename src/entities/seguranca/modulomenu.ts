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
  import { Transacoes } from "./transacao";
  
  @Index("modulomenu_pkey", ["idmodulomenu"], { unique: true })
  @Index("fki_fk_menusis", ["idsistema"], {})
  @Index("fki_fk_submenu", ["submenu"], {})
  @Entity("modulomenu", { schema: "seguranca" })
  export class Modulomenu {
	@PrimaryGeneratedColumn({ type: "integer", name: "idmodulomenu" })
	idmodulomenu: number;
  
	@Column("integer", { name: "idsistema", default: () => "0" })
	idsistema: number;
  
	@Column("character", {
	  name: "denominacao",
	  nullable: true,
	  length: 30,
	  default: () => "NULL::bpchar",
	})
	denominacao: string | null;
  
	@Column("character", {
	  name: "urlmenu",
	  nullable: true,
	  length: 70,
	  default: () => "NULL::bpchar",
	})
	urlmenu: string | null;
  
	@Column("character", {
	  name: "urlservico",
	  nullable: true,
	  length: 70,
	  default: () => "NULL::bpchar",
	})
	urlservico: string | null;
  
	@Column("integer", { name: "submenu", nullable: true })
	submenu: number | null;
  
	@ManyToOne(() => Sistema, (sistema) => sistema.modulomenus)
	@JoinColumn([{ name: "idsistema", referencedColumnName: "idsistema" }])
	sistema: Sistema;
  
	@ManyToOne(() => Modulomenu, (modulomenu) => modulomenu.modulomenus)
	@JoinColumn([{ name: "submenu", referencedColumnName: "idmodulomenu" }])
	submenu2: Modulomenu;
  
	@OneToMany(() => Modulomenu, (modulomenu) => modulomenu.submenu2)
	modulomenus: Modulomenu[];
  
	@OneToMany(() => Transacoes, (transacoes) => transacoes.modulomenu)
	transacoes: Transacoes[];
  }