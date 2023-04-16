import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("demostrativodedespesas_pk", ["iddespesa"], { unique: true })
@Entity("demonstrativodedespesas", { schema: "customobra" })
export class Demonstrativodedespesas {
  @PrimaryGeneratedColumn({ type: "integer", name: "iddespesa" })
  iddespesa: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("character varying", {
    name: "despmediasmensais",
    nullable: true,
    length: 50,
  })
  despmediasmensais: string | null;

  @Column("numeric", { name: "valor2", nullable: true })
  valor2: string | null;

  @Column("integer", { name: "idtipodespesa", nullable: true })
  idtipodespesa: number | null;

  @Column("timestamp without time zone", { name: "dataevento", nullable: true })
  dataevento: Date | null;

  @Column("integer", { name: "idsubtipodespesa", nullable: true })
  idsubtipodespesa: number | null;

  @Column("real", { name: "valor", nullable: true, precision: 24 })
  valor: number | null;
}
