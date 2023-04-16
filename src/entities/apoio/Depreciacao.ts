import { Column, Entity, Index } from "typeorm";

@Index("depreciacao_pkey", ["idDepreciacao"], { unique: true })
@Entity("depreciacao", { schema: "apoio" })
export class Depreciacao {
  @Column("integer", { primary: true, name: "idDepreciacao" })
  idDepreciacao: number;

  @Column("integer", { name: "anoMes" })
  anoMes: number;

  @Column("character varying", { name: "Depreciacao", length: 45 })
  depreciacao: string;

  @Column("character varying", {
    name: "Base",
    length: 4,
    default: () => "'a.a'",
  })
  base: string;

  @Column("numeric", {
    name: "taxa",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "NULL::numeric",
  })
  taxa: string | null;
}
