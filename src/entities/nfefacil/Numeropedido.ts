import { Column, Entity, Index } from "typeorm";

@Index("numeropedido_pkey", ["empresa", "pedido"], { unique: true })
@Entity("numeropedido", { schema: "nfefacil" })
export class Numeropedido {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "pedido" })
  pedido: number;
}
