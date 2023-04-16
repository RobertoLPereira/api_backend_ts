import { Column, Entity, Index } from "typeorm";

@Index("insumos_pkey", ["idInsumos"], { unique: true })
@Entity("insumos", { schema: "apoio" })
export class Insumos {
  @Column("integer", { primary: true, name: "idInsumos" })
  idInsumos: number;

  @Column("character varying", { name: "Insumo", length: 45 })
  insumo: string;
}
