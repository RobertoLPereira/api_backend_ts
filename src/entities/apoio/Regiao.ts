import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("regiao_pkey", ["idRegiao"], { unique: true })
@Entity("regiao", { schema: "apoio" })
export class Regiao {
  @PrimaryGeneratedColumn({ type: "integer", name: "IdRegiao" })
  idRegiao: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 30,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
