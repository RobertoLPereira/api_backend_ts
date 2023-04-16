import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("setorfinanciavel_pkey", ["idSetor"], { unique: true })
@Entity("setorfinanciavel", { schema: "apoio" })
export class Setorfinanciavel {
  @PrimaryGeneratedColumn({ type: "integer", name: "idSetor" })
  idSetor: number;

  @Column("character varying", { name: "denominacao", length: 45 })
  denominacao: string;
}
