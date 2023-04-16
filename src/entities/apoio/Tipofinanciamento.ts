import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipofinanciamento_pkey", ["idtipoFinanciamento"], { unique: true })
@Entity("tipofinanciamento", { schema: "apoio" })
export class Tipofinanciamento {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtipoFinanciamento" })
  idtipoFinanciamento: number;

  @Column("character varying", { name: "denominacao", length: 45 })
  denominacao: string;
}
