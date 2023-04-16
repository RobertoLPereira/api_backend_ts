import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Balancopatrimonial } from "./Balancopatrimonial";

@Index(
  "balancopatrimonialvalores_pkey",
  ["idbalancopatrimonial", "idbalancopatrimonialvalores"],
  { unique: true }
)
@Index("fki_fk_balancopatrim", ["idbalancopatrimonial"], {})
@Index("fki_fk_centrocustobal", ["idcentrocusto"], {})
@Entity("balancopatrimonialvalores", { schema: "cup" })
export class Balancopatrimonialvalores {
  @PrimaryGeneratedColumn({
    type: "integer",
    name: "idbalancopatrimonialvalores",
  })
  idbalancopatrimonialvalores: number;

  @Column("integer", { primary: true, name: "idbalancopatrimonial" })
  idbalancopatrimonial: number;

  @Column("integer", { name: "idcentrocusto" })
  idcentrocusto: number;

  @Column("numeric", {
    name: "valorcontabil",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0.0",
  })
  valorcontabil: string | null;

  @ManyToOne(
    () => Balancopatrimonial,
    (balancopatrimonial) => balancopatrimonial.balancopatrimonialvalores
  )
  @JoinColumn([
    {
      name: "idbalancopatrimonial",
      referencedColumnName: "idbalancopatrimonial",
    },
  ])
  idbalancopatrimonial2: Balancopatrimonial;
}
