import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("localdachave_pkey", ["idLocalChave"], { unique: true })
@Entity("localdachave", { schema: "apoio" })
export class Localdachave {
  @PrimaryGeneratedColumn({ type: "integer", name: "IdLocalChave" })
  idLocalChave: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 20,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
