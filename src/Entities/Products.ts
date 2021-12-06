import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    product_code!: string;

    @Column()
    Name!: string;

    @Column()
    Product_Description!: string;

    @Column()
    Category_code!: string;

    @Column()
    price!: string;

    @Column()
    Status!: string;

}