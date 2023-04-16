import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("categorias_pkey", ["idcategoria"], { unique: true })
@Entity("categorias", { schema: "delivery" })
export class Categorias {
  @PrimaryGeneratedColumn({ type: "integer", name: "idcategoria" })
  idcategoria: number;

  @Column("integer", { name: "idsubcategoria", nullable: true })
  idsubcategoria: number | null;

  @Column("character varying", {
    name: "denominacao",
    nullable: true,
    length: 255,
  })
  denominacao: string | null;

  @Column("character varying", { name: "url", nullable: true, length: 255 })
  url: string | null;

  @Column("boolean", { name: "vegano", nullable: true })
  vegano: boolean | null;
}
