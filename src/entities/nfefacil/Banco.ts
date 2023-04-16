import { Column, Entity, Index } from "typeorm";

@Index("banco_pkey", ["codigo"], { unique: true })
@Entity("banco", { schema: "nfefacil" })
export class Banco {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("character varying", { name: "banco", nullable: true, length: 4 })
  banco: string | null;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 50,
  })
  descricao: string | null;

  @Column("character varying", {
    name: "nome_reduzido",
    nullable: true,
    length: 20,
  })
  nomeReduzido: string | null;

  @Column("character", { name: "emite_boleto", nullable: true, length: 1 })
  emiteBoleto: string | null;
}
