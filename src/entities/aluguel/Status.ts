import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("status_denominacao_key", ["denominacao"], { unique: true })
@Index("status_pkey", ["idstatus"], { unique: true })
@Entity("status", { schema: "aluguel" })
export class Status {
  @PrimaryGeneratedColumn({ type: "integer", name: "idstatus" })
  idstatus: number;

  @Column("character varying", {
    name: "denominacao",
    unique: true,
    length: 20,
  })
  denominacao: string;
}
