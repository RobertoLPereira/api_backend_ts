import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("progressaoinss_pkey", ["id"], { unique: true })
@Entity("progressaoinss", { schema: "customobra" })
export class Progressaoinss {
  @Column("numeric", {
    name: "ValorInicial",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  valorInicial: string | null;

  @Column("numeric", { name: "ValorFinal", precision: 10, scale: 2 })
  valorFinal: string;

  @Column("numeric", { name: "Aliquota", precision: 5, scale: 2 })
  aliquota: string;

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;
}
