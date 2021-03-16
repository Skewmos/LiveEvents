<?php

namespace App\Repository;

use App\Entity\Billiet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Billiet|null find($id, $lockMode = null, $lockVersion = null)
 * @method Billiet|null findOneBy(array $criteria, array $orderBy = null)
 * @method Billiet[]    findAll()
 * @method Billiet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BillietRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Billiet::class);
    }

    // /**
    //  * @return Billiet[] Returns an array of Billiet objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Billiet
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
