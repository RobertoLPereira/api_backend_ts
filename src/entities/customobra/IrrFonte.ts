import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("irrfonte_pkey", ["id"], { unique: true })
@Entity("irrfonte", { schema: "customobra" })
export class Irrfonte {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", {
    name: "ValorInicial",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  valorInicial: string | null;

  @Column("numeric", {
    name: "ValorFinal",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  valorFinal: string | null;

  @Column("numeric", {
    name: "Aliquota",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  aliquota: string | null;

  @Column("numeric", {
    name: "ValorReducao",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  valorReducao: string | null;
}
