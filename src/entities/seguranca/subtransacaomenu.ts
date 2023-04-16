import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
  } from "typeorm";
  import { Transacoes } from "./transacao";
  
  @Index("subtransacaomenu_pkey", ["idsubtransacao"], { unique: true })
  @Index("fki_fk_transac", ["idtransacoes"], {})
  @Entity("subtransacaomenu", { schema: "seguranca" })
  export class Subtransacaomenu {
	@PrimaryGeneratedColumn({ type: "integer", name: "idsubtransacao" })
	idsubtransacao: number;
  
	@Column("integer", { name: "idtransacoes", default: () => "0" })
	idtransacoes: number;
  
	@Column("character", {
	  name: "subtransacao",
	  nullable: true,
	  length: 40,
	  default: () => "NULL::bpchar",
	})
	subtransacao: string | null;
  
	@Column("character", {
	  name: "urlsubtransacao",
	  nullable: true,
	  length: 100,
	  default: () => "NULL::bpchar",
	})
	urlsubtransacao: string | null;
  
	@Column("integer", { name: "idOperacao", nullable: true, default: () => "0" })
	idOperacao: number | null;
  
	@ManyToOne(() => Transacoes, (transacoes) => transacoes.subtransacaomenus)
	@JoinColumn([{ name: "idtransacoes", referencedColumnName: "idtransacoes" }])
	idtransacoes2: Transacoes;
  }
  