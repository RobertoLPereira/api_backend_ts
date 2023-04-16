import { Column, Entity, Index } from "typeorm";

@Index("salarios_pkey", ["idsalarios"], { unique: true })
@Entity("salarios", { schema: "apoio" })
export class Salarios {
  @Column("integer", { primary: true, name: "idsalarios" })
  idsalarios: number;

  @Column("character varying", { name: "denominacao", length: 45 })
  denominacao: string;
}
