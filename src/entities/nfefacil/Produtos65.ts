import { Column, Entity, Index } from "typeorm";

@Index("prod65_pkey", ["empresa", "item", "pedido"], { unique: true })
@Entity("produtos65", { schema: "nfefacil" })
export class Produtos65 {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "pedido" })
  pedido: number;

  @Column("integer", { primary: true, name: "item", default: () => "0" })
  item: number;

  @Column("integer", { name: "cod_produto" })
  codProduto: number;

  @Column("integer", { name: "cod_cfop", nullable: true })
  codCfop: number | null;

  @Column("double precision", {
    name: "quantidade",
    precision: 53,
    default: () => "0",
  })
  quantidade: number;

  @Column("numeric", { name: "peso", nullable: true, precision: 10, scale: 3 })
  peso: string | null;

  @Column("double precision", { name: "vlr_unitario", precision: 53 })
  vlrUnitario: number;

  @Column("double precision", {
    name: "vlr_produto",
    nullable: true,
    precision: 53,
  })
  vlrProduto: number | null;

  @Column("double precision", {
    name: "vlr_desconto",
    nullable: true,
    precision: 53,
  })
  vlrDesconto: number | null;

  @Column("double precision", {
    name: "vlr_total",
    nullable: true,
    precision: 53,
  })
  vlrTotal: number | null;

  @Column("boolean", { name: "cancelado", nullable: true })
  cancelado: boolean | null;
}
