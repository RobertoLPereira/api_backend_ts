import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Bem } from "./Bem";

@Index("pk_bemmaquina", ["idbem"], { unique: true })
@Index("fki_fk_maquinabem", ["idbem"], {})
@Entity("bemmaquina", { schema: "cup" })
export class Bemmaquina {
  @Column("integer", { primary: true, name: "idbem" })
  idbem: number;

  @Column("character varying", {
    name: "codigonofabricante",
    nullable: true,
    length: 15,
  })
  codigonofabricante: string | null;

  @Column("integer", { name: "quantidadeitens", nullable: true })
  quantidadeitens: number | null;

  @Column("text", { name: "numerosidentificacao", nullable: true })
  numerosidentificacao: string | null;

  @Column("date", { name: "datacadastro", nullable: true })
  datacadastro: string | null;

  @Column("character varying", {
    name: "numeronotafiscal",
    nullable: true,
    length: 10,
  })
  numeronotafiscal: string | null;

  @Column("character varying", {
    name: "serienotafiscal",
    nullable: true,
    length: 10,
  })
  serienotafiscal: string | null;

  @Column("integer", { name: "idmarca", nullable: true })
  idmarca: number | null;

  @Column("character varying", {
    name: "nomemodelo",
    nullable: true,
    length: 15,
  })
  nomemodelo: string | null;

  @Column("integer", { name: "idcor", nullable: true })
  idcor: number | null;

  @Column("character varying", {
    name: "numeroserie",
    nullable: true,
    length: 15,
  })
  numeroserie: string | null;

  @OneToOne(() => Bem, (bem) => bem.bemmaquina)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
