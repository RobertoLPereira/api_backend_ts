import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("horasefetivamentepagasanuais_pk", ["codigo"], { unique: true })
@Entity("horasefetivamentepagasanuais", { schema: "customobra" })
export class Horasefetivamentepagasanuais {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("integer", { name: "codigodahora", nullable: true })
  codigodahora: number | null;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 50,
  })
  descricao: string | null;

  @Column("integer", { name: "numerodedias", nullable: true })
  numerodedias: number | null;

  @Column("double precision", {
    name: "horascentesimais",
    nullable: true,
    precision: 53,
  })
  horascentesimais: number | null;

  @Column("double precision", {
    name: "horasano",
    nullable: true,
    precision: 53,
  })
  horasano: number | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;
}
