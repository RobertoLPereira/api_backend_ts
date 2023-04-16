import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("caixa_pkey", ["id"], { unique: true })
@Entity("caixa", { schema: "pdvandroid" })
export class Caixa {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "terminal", nullable: true, length: 12 })
  terminal: string | null;

  @Column("date", { name: "abertura" })
  abertura: string;

  @Column("numeric", {
    name: "valor_abertura",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  valorAbertura: string | null;

  @Column("integer", { name: "id_usuario" })
  idUsuario: number;

  @Column("date", { name: "fechamento", nullable: true })
  fechamento: string | null;

  @Column("numeric", { name: "valor_fechamento", precision: 7, scale: 2 })
  valorFechamento: string;

  @Column("numeric", {
    name: "diferenca",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  diferenca: string | null;
}
