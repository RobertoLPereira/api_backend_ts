import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clientes } from "./Clientes";

@Index("amortizacaodecapital_pk", ["codigo"], { unique: true })
@Index("fki_empresa", ["empresa"], {})
@Entity("amortizacaodecapital", { schema: "customobra" })
export class Amortizacaodecapital {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("double precision", {
    name: "taxaamortizacao",
    nullable: true,
    precision: 53,
  })
  taxaamortizacao: number | null;

  @Column("timestamp without time zone", {
    name: "dataapuracao",
    nullable: true,
  })
  dataapuracao: Date | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;

  @ManyToOne(() => Clientes, (clientes) => clientes.amortizacaodecapitals)
  @JoinColumn([{ name: "empresa", referencedColumnName: "empresa" }])
  empresa2: Clientes;
}
