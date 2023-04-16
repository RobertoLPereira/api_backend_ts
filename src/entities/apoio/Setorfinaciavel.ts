import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("setorfinaciavel_pkey", ["idsetor"], { unique: true })
@Entity("setorfinaciavel", { schema: "apoio" })
export class Setorfinaciavel {
  @PrimaryGeneratedColumn({ type: "integer", name: "idsetor" })
  idsetor: number;

  @Column("character varying", {
    name: "denominacao",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  denominacao: string | null;
}
