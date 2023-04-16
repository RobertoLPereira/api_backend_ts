import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("maodeobraprodutiva_pk", ["codigo"], { unique: true })
@Entity("maodeobraprodutiva", { schema: "customobra" })
export class Maodeobraprodutiva {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("character varying", {
    name: "maodeobra",
    nullable: true,
    length: 50,
  })
  maodeobra: string | null;

  @Column("integer", { name: "quantidade", nullable: true })
  quantidade: number | null;

  @Column("numeric", { name: "salariobase", nullable: true })
  salariobase: string | null;

  @Column("double precision", {
    name: "produtividade",
    nullable: true,
    precision: 53,
  })
  produtividade: number | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;
}
