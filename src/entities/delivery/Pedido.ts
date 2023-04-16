import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pedidoitem } from "./Pedidoitem";

@Index("pedido_pkey", ["idpedido"], { unique: true })
@Index("fki_pedidoItem", ["idpedido"], {})
@Index("fki_pessoaPedido", ["idpessoa"], {})
@Entity("pedido", { schema: "delivery" })
export class Pedido {
  @Column("integer", { name: "idpessoa" })
  idpessoa: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idpedido" })
  idpedido: number;

  @Column("character varying", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("integer", { name: "enviado", nullable: true, default: () => "0" })
  enviado: number | null;

  @Column("integer", { name: "recebido", nullable: true, default: () => "0" })
  recebido: number | null;

  @Column("date", { name: "created", nullable: true })
  created: string | null;

  @OneToMany(() => Pedidoitem, (pedidoitem) => pedidoitem.idpedido)
  pedidoitems: Pedidoitem[];
}
