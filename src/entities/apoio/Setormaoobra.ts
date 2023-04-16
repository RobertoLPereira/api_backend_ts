import { Column, Entity, Index } from "typeorm";

@Index("setormaoobra_pkey", ["idsetorMaoObra"], { unique: true })
@Entity("setormaoobra", { schema: "apoio" })
export class Setormaoobra {
  @Column("integer", { primary: true, name: "idsetorMaoObra" })
  idsetorMaoObra: number;

  @Column("character varying", { name: "setor", length: 45 })
  setor: string;
}
