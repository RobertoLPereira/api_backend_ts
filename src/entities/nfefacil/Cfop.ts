import { Column, Entity, Index } from "typeorm";

@Index("cfop_pkey", ["codigo"], { unique: true })
@Entity("cfop", { schema: "nfefacil" })
export class Cfop {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("integer", { name: "cfop", nullable: true })
  cfop: number | null;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 120,
  })
  descricao: string | null;

  @Column("character varying", {
    name: "observacao",
    nullable: true,
    length: 120,
  })
  observacao: string | null;

  @Column("boolean", { name: "faturamento" })
  faturamento: boolean;

  @Column("boolean", { name: "financeiro", nullable: true })
  financeiro: boolean | null;

  @Column("integer", { name: "seqcfop", nullable: true })
  seqcfop: number | null;

  @Column("character", { name: "operacao", nullable: true, length: 1 })
  operacao: string | null;
}
