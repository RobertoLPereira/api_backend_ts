import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
  } from "typeorm";
  import { Subtransacaomenu } from "./subtransacaomenu";
  import { Modulomenu } from "./modulomenu";
  
  @Index("fki_fk_menuopc", ["idmodulomenu"], {})
  @Index("transacoes_pkey", ["idtransacoes"], { unique: true })
  @Entity("transacoes", { schema: "seguranca" })
  export class Transacoes {
	@PrimaryGeneratedColumn({ type: "integer", name: "idtransacoes" })
	idtransacoes: number;
  
	@Column("integer", { name: "idmodulomenu", default: () => "0" })
	idmodulomenu: number;
  
	@Column("integer", { name: "idoperacao", nullable: true, default: () => "0" })
	idoperacao: number | null;
  
	@Column("character", {
	  name: "transacao",
	  nullable: true,
	  length: 30,
	  default: () => "NULL::bpchar",
	})
	transacao: string | null;
  
	@Column("character", {
	  name: "urltransacao",
	  nullable: true,
	  length: 100,
	  default: () => "NULL::bpchar",
	})
	urltransacao: string | null;
  
	@Column("integer", { name: "status", default: () => "0" })
	status: number;
  
	@OneToMany(
	  () => Subtransacaomenu,
	  (subtransacaomenu) => subtransacaomenu.idtransacoes
	)
	subtransacaomenus: Subtransacaomenu[];
  
	@ManyToOne(() => Modulomenu, (modulomenu) => modulomenu.transacoes)
	@JoinColumn([{ name: "idmodulomenu", referencedColumnName: "idmodulomenu" }])
	modulomenu: Modulomenu;
  }