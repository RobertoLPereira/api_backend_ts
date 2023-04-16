import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cliente_pkey", ["id"], { unique: true })
@Index("cliente_nome_key", ["nome"], { unique: true })
@Entity("cliente", { schema: "pdvandroid" })
export class Cliente {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", unique: true, length: 50 })
  nome: string;

  @Column("character varying", { name: "cnpjcpf", length: 14 })
  cnpjcpf: string;
}
