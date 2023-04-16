import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Centrocusto } from "./Centrocusto";
import { Contrato } from "./Contrato";
import { Imovelunidade } from "./Imovelunidade";

@Index("pagamentos_pkey", ["idpagamento"], { unique: true })
@Entity("pagamentos", { schema: "aluguel" })
export class Pagamentos {
  @PrimaryGeneratedColumn({ type: "integer", name: "idpagamento" })
  idpagamento: number;

  @Column("timestamp with time zone", { name: "datapagamento", nullable: true })
  datapagamento: Date | null;

  @Column("numeric", {
    name: "valorpago",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  valorpago: string | null;

  @Column("numeric", { name: "juros", nullable: true, precision: 10, scale: 2 })
  juros: string | null;

  @Column("numeric", {
    name: "desconto",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  desconto: string | null;

  @OneToMany(() => Centrocusto, (centrocusto) => centrocusto.idpagamento)
  centrocustos: Centrocusto[];

  @ManyToOne(() => Contrato, (contrato) => contrato.pagamentos)
  @JoinColumn([{ name: "idcontrato", referencedColumnName: "idcontrato" }])
  idcontrato: Contrato;

  @ManyToOne(() => Imovelunidade, (imovelunidade) => imovelunidade.pagamentos)
  @JoinColumn([{ name: "idunidade", referencedColumnName: "idunidade" }])
  idunidade: Imovelunidade;
}
