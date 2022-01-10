import {MigrationInterface, QueryBuilder, QueryRunner, Table} from "typeorm";

export class createUsers1641773127241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [{
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                default: 'uuid_generate_v4()',
                generationStrategy: 'uuid'
            },{
                name: 'username',
                type: 'varchar',
                length: '20',
                isNullable: false
            },{
                name: 'email',
                type: 'varchar',
                length: '80',
                isNullable: false,
                isUnique: true
            },{
                name: 'password',
                type: 'varchar',
                isNullable: false,
            },{
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
              },{
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()'
              }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
