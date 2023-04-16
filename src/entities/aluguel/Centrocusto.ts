import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Imovel } from "./Imovel";
import { Pagamentos } from "./Pagamentos";

@Index("centrocusto_pkey", ["id"], { unique: true })
@Entity("centrocusto", { schema: "aluguel" })
export class Centrocusto {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "idtaxaadm", nullable: true })
  idtaxaadm: number | null;

  @Column("double precision", {
    name: "valor",
    nullable: true,
    precision: 53,
    default: () => "'0'",
  })
  valor: number | null;

  @Column("timestamp with time zone", { name: "datadoevento", nullable: true })
  datadoevento: Date | null;

  @ManyToOne(() => Imovel, (imovel) => imovel.centrocustos)
  @JoinColumn([{ name: "idimovel", referencedColumnName: "idimovel" }])
  idimovel: Imovel;

  @ManyToOne(() => Pagamentos, (pagamentos) => pagamentos.centrocustos)
  @JoinColumn([{ name: "idpagamento", referencedColumnName: "idpagamento" }])
  idpagamento: Pagamentos;
}
