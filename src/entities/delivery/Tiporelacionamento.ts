import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subtiporegistro } from "./Subtiporegistro";

@Index("tiporelacionamento_pkey", ["idtiporelacionamento"], { unique: true })
@Index("fki_tiporelacionamentoSubtipo", ["idtiporelacionamento"], {})
@Entity("tiporelacionamento", { schema: "delivery" })
export class Tiporelacionamento {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtiporelacionamento" })
  idtiporelacionamento: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 15,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @OneToMany(
    () => Subtiporegistro,
    (subtiporegistro) => subtiporegistro.idtiporelacionamento
  )
  subtiporegistros: Subtiporegistro[];
}
