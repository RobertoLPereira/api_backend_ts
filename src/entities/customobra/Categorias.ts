import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_categorias", ["codigo"], { unique: true })
@Entity("categorias", { schema: "customobra" })
export class Categorias {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "categoria" })
  categoria: number;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 50,
  })
  descricao: string | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;
}
