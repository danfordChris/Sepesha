<?php

$d = Yii::$app->db->createCommand("SELECT company_name,company_address,tel,phone,fax,company_email,weburl,logo FROM companies")->queryOne(false);
$tbH = "<br /><table cellpadding=2  cellspacing=0 width=100% >";
$tbH .= "<tr><td width=10%><img src='" . Yii::getAlias('@web') . '/uploads/' . $d[7] . "'  width='100' height='60' /></td>";
$tbH .= "<td align=center><b><span style='font-size: 16px; color: #000000;'>$d[0]</span></b><br />$d[1]<br />$d[2]<br />Tel:&nbsp;$d[3],&nbsp;Fax:&nbsp;$d[4]<br />";
$tbH .= "email:&nbsp;<u>$d[5]</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>$d[6]</u>";
$tbH .= "</table>";
$titleH = "<hr><span><h5 style='font-weight:bold;font-size: 20px;text-align:center'>" . $this->title . "</h5></span><br>";

?>
<?php
$startDate = '2024-10-05';
$endDate = '2024-11-05';
?>
<?php
$command = Yii::$app->db->createCommand('
SELECT 
    SUM(CASE WHEN b.gender = :male THEN 1 ELSE 0 END) AS street_outreach_Male_Count,
    SUM(CASE WHEN b.gender = :female THEN 1 ELSE 0 END) AS street_outreach_Female_Count,
    COUNT(*) AS street_outreach_Total_Count
FROM 
    intakes i
JOIN 
    beneficiaries b ON i.beneficiary_id = b.id
WHERE 
    b.how_identified = :how_identified
    AND b.programid NOT IN (:programid1, :programid2)
    AND b.isintake = :isintake
    AND i.intake_date >= :startDate
    AND i.intake_date <= :endDate
    AND i.status = :status
');

$command->bindValue(':male', 'Male');
$command->bindValue(':female', 'Female');
$command->bindValue(':how_identified', 19);
$command->bindValue(':programid1', 4);
$command->bindValue(':programid2', 5);
$command->bindValue(':isintake', 1);
$command->bindValue(':startDate', $startDate); 
$command->bindValue(':endDate', $endDate);    
$command->bindValue(':status', 'A');  

$results = $command->queryAll();
$street_outreach_maleCount = $results[0]['street_outreach_Male_Count'] ?? 0;
$street_outreach_femaleCount = $results[0]['street_outreach_Female_Count'] ?? 0;
$street_outreach_totalCount = $results[0]['street_outreach_Total_Count'] ?? 0;


?>

<?php
$command = Yii::$app->db->createCommand('
SELECT 
    SUM(CASE WHEN b.gender = :male THEN 1 ELSE 0 END) AS referrals_Male_Count,
    SUM(CASE WHEN b.gender = :female THEN 1 ELSE 0 END) AS referrals_Female_Count,
    COUNT(*) AS referrals_Total_Count
FROM 
    intakes i
JOIN 
    beneficiaries b ON i.beneficiary_id = b.id
WHERE 
    b.programid NOT IN (:programid1, :programid2)
    AND  b.how_identified NOT IN (:how_identified)
    AND b.isintake = :isintake
    AND i.intake_date >= :startDate
    AND i.intake_date <= :endDate
    AND i.status = :status
');
$command->bindValue(':male', 'Male');
$command->bindValue(':female', 'Female');
$command->bindValue(':how_identified', 19);
$command->bindValue(':programid1', 4);
$command->bindValue(':programid2', 5);
$command->bindValue(':isintake', 1);
$command->bindValue(':startDate', $startDate); 
$command->bindValue(':endDate', $endDate);    
$command->bindValue(':status', 'A');  
$results = $command->queryAll();
$referrals_maleCount = $results[0]['referrals_Male_Count'] ?? 0;
$referrals_femaleCount = $results[0]['referrals_Female_Count'] ?? 0;
$referrals_totalCount = $results[0]['referrals_Total_Count'] ?? 0;

?>


<?php
$command = Yii::$app->db->createCommand('
SELECT 
    SUM(DISTINCT CASE WHEN b.gender = :male THEN 1 ELSE 0 END) AS bsService_Male_Count,
    SUM(DISTINCT CASE WHEN b.gender = :female THEN 1 ELSE 0 END) AS bsService_Female_Count,
    COUNT(DISTINCT i.id) AS bsService_Total_Count  
FROM 
    intakes i
JOIN 
    beneficiaries b ON i.beneficiary_id = b.id
LEFT JOIN
    beneficiary_services bs ON bs.intakeid = i.id
LEFT JOIN 
    services s ON s.id = bs.service_id
WHERE 
    b.programid NOT IN (:programid1, :programid2)
    AND bs.service_id = :bsService
    AND b.isintake = :isintake
    AND i.intake_date >= :startDate
    AND i.intake_date <= :endDate
    AND i.status =:status;
');
$command->bindValue(':male', 'Male');
$command->bindValue(':female', 'Female');
$command->bindValue(':bsService', 2);
$command->bindValue(':programid1', 4);
$command->bindValue(':programid2', 5);
$command->bindValue(':isintake', 1);
$command->bindValue(':startDate', $startDate); 
$command->bindValue(':endDate', $endDate);    
$command->bindValue(':status', 'A');  

$results = $command->queryAll();



$bsService_maleCount = $results[0]['bsService_Male_Count'] ?? 0;
$bsService_femaleCount = $results[0]['bsService_Female_Count'] ?? 0;
$bsService_totalCount = $results[0]['bsService_Total_Count'] ?? 0;


?>


<?php
$command = Yii::$app->db->createCommand('
SELECT 
    SUM(DISTINCT CASE WHEN b.gender = :male THEN 1 ELSE 0 END) AS fit_person_care_Male_Count,
    SUM(DISTINCT CASE WHEN b.gender = :female THEN 1 ELSE 0 END) AS fit_person_care_Female_Count,
    COUNT(DISTINCT i.id) AS fit_person_care_Total_Count  
FROM 
    intakes i
JOIN 
    beneficiaries b ON i.beneficiary_id = b.id
LEFT JOIN
	fitperson_shelter_placement fsp ON fsp.intake_id = i.id
WHERE 
    b.programid NOT IN (:programid1, :programid2)
    AND b.isintake = :isintake
	AND fsp.type= :type
    AND i.intake_date >= :startDate
    AND i.intake_date <= :endDate
    AND i.status =:status;
');
$command->bindValue(':male', 'Male');
$command->bindValue(':female', 'Female');
$command->bindValue(':programid1', 4);
$command->bindValue(':programid2', 5);
$command->bindValue(':type', 27);
$command->bindValue(':isintake', 1);
$command->bindValue(':startDate', $startDate); 
$command->bindValue(':endDate', $endDate);    
$command->bindValue(':status', 'A');  

$results = $command->queryAll();



$fit_person_care_maleCount = $results[0]['fit_person_care_Male_Count'] ?? 0;
$fit_person_care_femaleCount = $results[0]['fit_person_care_Female_Count'] ?? 0;
$fit_person_care_totalCount = $results[0]['fit_person_care_Total_Count'] ?? 0;


?>

<?php
$command = Yii::$app->db->createCommand('
SELECT 
    SUM(DISTINCT CASE WHEN b.gender = :male THEN 1 ELSE 0 END) AS food_support_fit_person_care_Male_Count,
    SUM(DISTINCT CASE WHEN b.gender = :female THEN 1 ELSE 0 END) AS food_support_fit_person_care_Female_Count,
    COUNT(DISTINCT i.id) AS food_support_fit_person_care_Total_Count  
FROM 
    intakes i
JOIN 
    beneficiaries b ON i.beneficiary_id = b.id
LEFT JOIN
	fitperson_shelter_placement fsp ON fsp.intake_id = i.id
LEFT JOIN 
      beneficiary_services bsf ON bsf.intakeid = i.id
WHERE 
    b.programid NOT IN (:programid1, :programid2)
    AND b.isintake = :isintake
	AND fsp.type= :type
	AND bsf.service_id= :service
    AND i.intake_date >= :startDate
    AND i.intake_date <= :endDate
    AND i.status =:status;
');
$command->bindValue(':male', 'Male');
$command->bindValue(':female', 'Female');
$command->bindValue(':programid1', 4);
$command->bindValue(':programid2', 5);
$command->bindValue(':type', 27);
$command->bindValue(':service', 19);
$command->bindValue(':isintake', 1);
$command->bindValue(':startDate', $startDate); 
$command->bindValue(':endDate', $endDate);    
$command->bindValue(':status', 'A');  

$results = $command->queryAll();



$food_support_fit_person_care_maleCount = $results[0]['food_support_fit_person_care_Male_Count'] ?? 0;
$food_support_fit_person_care_femaleCount = $results[0]['food_support_fit_person_care_Female_Count'] ?? 0;
$food_support_fit_person_care_totalCount = $results[0]['food_support_fit_person_care_Total_Count'] ?? 0;


?>

<?php
$command = Yii::$app->db->createCommand('
SELECT 
    SUM(DISTINCT CASE WHEN b.gender = :male THEN 1 ELSE 0 END) AS CLWS_ben_enrolled_school_Male_Count,
    SUM(DISTINCT CASE WHEN b.gender = :female THEN 1 ELSE 0 END) AS CLWS_ben_enrolled_school_Female_Count,
    COUNT(DISTINCT i.id) AS CLWS_ben_enrolled_school_Total_Count  
FROM 
    intakes i
JOIN 
    beneficiaries b ON i.beneficiary_id = b.id
LEFT JOIN 
      beneficiary_services bsf ON bsf.intakeid = i.id
WHERE 
    b.programid NOT IN (:programid1, :programid2)
    AND b.isintake = :isintake
	AND bsf.service_id= :service
    AND i.intake_date >= :startDate
    AND i.intake_date <= :endDate
    AND i.status =:status;
');
$command->bindValue(':male', 'Male');
$command->bindValue(':female', 'Female');
$command->bindValue(':programid1', 4);
$command->bindValue(':programid2', 5);
$command->bindValue(':service', 15);
$command->bindValue(':isintake', 1);
$command->bindValue(':startDate', $startDate); 
$command->bindValue(':endDate', $endDate);    
$command->bindValue(':status', 'A');  

$results = $command->queryAll();



$CLWS_ben_enrolled_school_maleCount = $results[0]['CLWS_ben_enrolled_school_Male_Count'] ?? 0;
$CLWS_ben_enrolled_school_femaleCount = $results[0]['CLWS_ben_enrolled_school_Female_Count'] ?? 0;
$CLWS_ben_enrolled_school_totalCount = $results[0]['CLWS_ben_enrolled_school_Total_Count'] ?? 0;


?>



<?php
$command = Yii::$app->db->createCommand('
SELECT 
    SUM(DISTINCT CASE WHEN b.gender = :male THEN 1 ELSE 0 END) AS residential_care_Male_Count,
    SUM(DISTINCT CASE WHEN b.gender = :female THEN 1 ELSE 0 END) AS residential_care_Female_Count,
    COUNT(DISTINCT i.id) AS residential_care_Total_Count  
FROM 
    intakes i
JOIN 
    beneficiaries b ON i.beneficiary_id = b.id
LEFT JOIN
	fitperson_shelter_placement fsp ON fsp.intake_id = i.id
WHERE 
    b.programid NOT IN (:programid1, :programid2)
    AND b.isintake = :isintake
	AND fsp.type= :type
    AND i.intake_date >= :startDate
    AND i.intake_date <= :endDate
    AND i.status =:status;
');
$command->bindValue(':male', 'Male');
$command->bindValue(':female', 'Female');
$command->bindValue(':programid1', 4);
$command->bindValue(':programid2', 5);
$command->bindValue(':type', 26);
$command->bindValue(':isintake', 1);
$command->bindValue(':startDate', $startDate); 
$command->bindValue(':endDate', $endDate);    
$command->bindValue(':status', 'A');  

$results = $command->queryAll();



$residential_care_maleCount = $results[0]['residential_care_Male_Count'] ?? 0;
$residential_care_femaleCount = $results[0]['residential_care_Female_Count'] ?? 0;
$residential_care_totalCount = $results[0]['residential_care_Total_Count'] ?? 0;


?>







<?php
$command = Yii::$app->db->createCommand('
SELECT 
    SUM(DISTINCT CASE WHEN b.gender = :male THEN 1 ELSE 0 END) AS CLWS_received_school_materials_Male_Count,
    SUM(DISTINCT CASE WHEN b.gender = :female THEN 1 ELSE 0 END) AS CLWS_received_school_materials_Female_Count,
    COUNT(DISTINCT i.id) AS CLWS_received_school_materials_Total_Count  
FROM 
    intakes i
JOIN 
    beneficiaries b ON i.beneficiary_id = b.id
LEFT JOIN 
      beneficiary_services bsf ON bsf.intakeid = i.id
WHERE 
    b.programid NOT IN (:programid1, :programid2)
    AND b.isintake = :isintake
	AND bsf.service_id= :service
    AND i.intake_date >= :startDate
    AND i.intake_date <= :endDate
    AND i.status =:status;
');
$command->bindValue(':male', 'Male');
$command->bindValue(':female', 'Female');
$command->bindValue(':programid1', 4);
$command->bindValue(':programid2', 5);
//change beneficiary service id to education material service id in the services table
$command->bindValue(':service', 15);
$command->bindValue(':isintake', 1);
$command->bindValue(':startDate', $startDate); 
$command->bindValue(':endDate', $endDate);    
$command->bindValue(':status', 'A');  

$results = $command->queryAll();



$CLWS_received_school_materials_maleCount = $results[0]['CLWS_received_school_materials_Male_Count'] ?? 0;
$CLWS_received_school_materials_femaleCount = $results[0]['CLWS_received_school_materials_Female_Count'] ?? 0;
$CLWS_received_school_materials_totalCount = $results[0]['CLWS_received_school_materials_Total_Count'] ?? 0;


?>


<style>
table,
th,
td {
    border: 1px solid black !important;
}
</style>



<div class="card">
    <h4 class="card-header" style="text-align: center;">Street and Family Work Monthly Service Summary
        Tracking</h4>
    <div class="card-body">
        <div class="row" style="text-align: center;"><?= $tbH . $titleH; ?></div>

        <table border="1" cellspacing="0" cellpadding="8" class="table table-bordered"
            style="border-color: black; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>Intervention</th>
                    <th>Output Indicators</th>
                    <th>Male</th>
                    <th>Female</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td rowspan="4">Street outreach intervention</td>
                    <td>Total new CYLWS enrolled in the project through street outreach (early morning, day & night)
                    </td>
                    <td><?= $street_outreach_maleCount;  ?></td>
                    <td><?= $street_outreach_femaleCount;  ?></td>
                    <td><?=  $street_outreach_totalCount;?></td>
                </tr>
                <tr>
                    <td>Total new CYLWS enrolled in the project through referrals (stakeholders or champions)</td>
                    <td><?= $referrals_maleCount;  ?></td>
                    <td><?= $referrals_femaleCount;  ?></td>
                    <td><?=  $referrals_totalCount;?></td>
                </tr>
                <tr>
                    <td>Total children attended children’s platforms</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                
                    <td>New CYLWS received medical support</td>
                    <td><?= $bsService_maleCount;  ?></td>
                    <td><?= $bsService_femaleCount;  ?></td>
                    <td><?=  $bsService_totalCount;?></td>
                </tr>
                <tr>
                    <td rowspan="7">Temporary shelter placement (fit person/residential shelter)</td>
                    <td>Total CLWS placed under fit person care</td>
                    <td><?= $fit_person_care_maleCount;  ?></td>
                    <td><?= $fit_person_care_femaleCount;  ?></td>
                    <td><?=  $fit_person_care_totalCount;?></td>
                </tr>
                <tr>
               
                    <td>Total CYLWS received food support at Fit person</td>
                    <td><?= $food_support_fit_person_care_maleCount;  ?></td>
                    <td><?= $food_support_fit_person_care_femaleCount;  ?></td>
                    <td><?=  $food_support_fit_person_care_totalCount;?></td>
                </tr>
                <tr>
               
                    <td>Total CLWS placed under residential care</td>
                    <td><?= $residential_care_maleCount;  ?></td>
                    <td><?= $residential_care_femaleCount;  ?></td>
                    <td><?=  $residential_care_totalCount;?></td>
                </tr>
                <tr>

                    <td>Children received educational support while at placement residential shelter/fit person</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>

                    <td>Children currently under placement (shelter/fit person)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>

                    <td>Children reunified from placement</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>

                    <td>Children dropped while at placement</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="8">Family Reunification & School Support</td>
                    <td>New CLWS reunified into a protective family</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                
                    <td>New CLWS enrolled in school</td>
                    <td><?= $CLWS_ben_enrolled_school_maleCount;  ?></td>
                    <td><?= $CLWS_ben_enrolled_school_femaleCount;  ?></td>
                    <td><?=  $CLWS_ben_enrolled_school_totalCount;?></td>
                </tr>
                <tr>
                    <td>Total CLWS received school materials (new and existing)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Siblings newly enrolled in the project</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>New Siblings enrolled in school</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Total Siblings received school materials (new and existing)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of new primary caregivers of reintegrated children enrolled in the project</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Total number of primary caregivers of reintegrated children served in a month</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="7">Family Livelihood and Health Support</td>
                    <td>Number of families who received food support</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of families visited physically</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of families visited remotely</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of families received therapeutic support</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of family members who received medical support (including CHF)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of families who received business training</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of families who received a business grant</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="5">ACT Parenting Program</td>
                    <td>New ACT parenting groups formed during this month</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>

                    <td>New members joined/recruited in ACT groups</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>

                    <td>Total ACT parents attended ACT parenting sessions</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>

                    <td>ACT children newly enrolled</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>

                    <td>New ACT parents trained on VSLA</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="8">Youth work</td>
                    <td>Number of youth associations formed during this month</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of youths linked to vocational</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of youths linked to apprenticeship</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of youths received business support</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of youths received house rent support</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of youths received start-up kits</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Number of youths continue with placement (vocational & apprenticeship)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>

                    <td>Number of youths dropped from placement</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>