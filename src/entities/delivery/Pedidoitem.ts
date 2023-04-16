import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pedido } from "./Pedido";

@Index("pedidoitem_pkey", ["idpedidoitem"], { unique: true })
@Entity("pedidoitem", { schema: "delivery" })
export class Pedidoitem {
  @PrimaryGeneratedColumn({ type: "integer", name: "idpedidoitem" })
  idpedidoitem: number;

  @Column("integer", { name: "idanuncioitem", nullable: true })
  idanuncioitem: number | null;

  @Column("character varying", { name: "name", nullable: true, length: 60 })
  name: string | null;

  @Column("numeric", {
    name: "quantidade",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  quantidade: string | null;

  @Column("integer", { name: "unidade", nullable: true, default: () => "0" })
  unidade: number | null;

  @Column("numeric", { name: "valor", nullable: true, precision: 10, scale: 2 })
  valor: string | null;

  @Column("integer", { name: "checked", nullable: true, default: () => "0" })
  checked: number | null;

  @Column("date", { name: "created", nullable: true })
  created: string | null;

  @Column("character varying", {
    name: "categoria",
    nullable: true,
    length: 30,
    default: () => "'Generica'",
  })
  categoria: string | null;

  @ManyToOne(() => Pedido, (pedido) => pedido.pedidoitems)
  @JoinColumn([{ name: "idpedido", referencedColumnName: "idpedido" }])
  idpedido: Pedido;
}
