import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("maodeobranaoprodutiva_pk", ["codigo"], { unique: true })
@Entity("maodeobranaoprodutiva", { schema: "customobra" })
export class Maodeobranaoprodutiva {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("character varying", {
    name: "maodeobranao",
    nullable: true,
    length: 50,
  })
  maodeobranao: string | null;

  @Column("integer", { name: "quantidade", nullable: true })
  quantidade: number | null;

  @Column("numeric", { name: "salariobase", nullable: true })
  salariobase: string | null;
}
