import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Naturezarelacionamento } from "./Naturezarelacionamento";
import { Tiporelacionamento } from "./Tiporelacionamento";

@Index("naturezatipo_pkey", ["id"], { unique: true })
@Index("fki_fk_natureza", ["idnaturezarelacionamento"], {})
@Index("fki_fk_tipoRelac", ["idtiporelacionamento"], {})
@Entity("naturezatipo", { schema: "apoio" })
export class Naturezatipo {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "idtiporelacionamento", default: () => "0" })
  idtiporelacionamento: number;

  @Column("integer", { name: "idnaturezarelacionamento", default: () => "0" })
  idnaturezarelacionamento: number;

  @ManyToOne(
    () => Naturezarelacionamento,
    (naturezarelacionamento) => naturezarelacionamento.naturezatipos
  )
  @JoinColumn([
    { name: "idnaturezarelacionamento", referencedColumnName: "id" },
  ])
  idnaturezarelacionamento2: Naturezarelacionamento;

  @ManyToOne(
    () => Tiporelacionamento,
    (tiporelacionamento) => tiporelacionamento.naturezatipos
  )
  @JoinColumn([{ name: "idtiporelacionamento", referencedColumnName: "id" }])
  idtiporelacionamento2: Tiporelacionamento;
}
