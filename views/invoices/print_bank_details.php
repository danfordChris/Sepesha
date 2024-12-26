 <div style="text-align:center">
     <?= $tbIheader ?>

 </div>

 <table cellpadding=1 cellspacing=0 width=100%>
     <tr>
         <th colspan="2">(a). Remitter / Tax Payer Details :-</th>
     </tr>
     <tr>
         &nbsp;&nbsp;<td>Name of Account Holder(s)</td>
         &nbsp;&nbsp;<td>:...............................................................</td>
     </tr>
     <tr>
         &nbsp;&nbsp;<td>Name of Commercial Bank</td>
         &nbsp;&nbsp;<td>:...............................................................</td>
         <p></p>

     </tr>
     <tr>
         &nbsp;&nbsp;<td>Bank Account Number</td>
         &nbsp;&nbsp;<td>:................................................................</td>
     </tr>
     <tr>
         &nbsp;&nbsp;<td>Signatories</td>
         &nbsp;&nbsp;<td>:.........................................|
             .........................................
             <br>
             &nbsp;&nbsp; <span style="font-size: 10px;">signature of the transfer one</span> &nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 10px;">signature
                 of the
                 transfer two</span>
         </td>
     </tr>
     <br>
     <tr>
         <th>(b). Beneficiary Details :-</th>
         <th style="font-size: 11px;">DIRECTOR GENERAL - TANZANIA CIVIL AVIATION AUTHORITY</th>
     </tr>

     <tr>
         <td>Name of Commercial Bank</td>
         <th colspan=>: National Bank of Commerce</th>
     </tr>
     <tr>
         <td>Account Number</td>
         <th>: 011105002975</th>
     </tr>
     <tr>
         <td>SWIFT Code</td>
         <th>: NLCBTZTX</th>
     </tr>
     <tr>
         <td>Control Number</td>
         <th>: <?= $data[0] ?></th>
     </tr>
     <tr>
         <td>Payer Name</td>
         <th>: <?= $data[3] ?></th>
     </tr>
     <tr>
         <td width="40%">Beneficiary Account (Field 59 of MT103)</td>
         <th>: /011105002975</th>
     </tr>
     <tr>
         <td width="40%">Payment Reference (Field 70 of MT103)</td>
         <th>: /ROC/<?= $data[0] ?></th>
     </tr>
     <tr>
         <td>Transfer Amount</th>
         <th>: <?= number_format($data[7], 2) ?> (<?= $data[8] ?>)</th>
     </tr>
     <tr>
         <td>Amount in Words</td>
         <td>: <?= ucwords(Yii::$app->formatter->asSpellout($data[7])) ?> <?= $data[8] ?> Only </td>
     </tr>
     <tr>
         <td>Being payment for</td>
         <td>: <?= $data[6] ?></td>
     </tr>
     <tr>
         <td>Billed Item (1)</td>
         <td>: <?= $data[6] ?></td>
     </tr>
     <tr>
         <td>Expires On</td>
         <td>: <?= $data[9] ?></td>
     </tr>
     <tr>
         <td>Prepared By</td>
         <td>: <?= ucwords(strtolower($pby)) ?></td>
     </tr>
     <tr>
         <td>Collection Center</td>
         <td>: <?= $data[10] ?></td>
     </tr>
     <tr>
         <td>Printed By</td>
         <th>: <?= ucwords(strtolower(Yii::$app->user->identity->fullname)) ?></th>
     </tr>
     <tr>
         <td>Printed On</td>
         <td>: <?= date('d-m-Y') ?></td>
     </tr>
     <tr>
         <td>Signature</td>
         <td>: -----------------------------</td>
     </tr>
     <br>
     <tr>
         <th colspan="2">Note to Commercial Bank:</th>
     </tr>
     <tr>
         <td colspan="2" style="font-size: 11px;">1. Please capture the above information correctly. Do not change or
             add any text, symbols or
             digits on the information provided.</td>
     </tr>
     <tr>
         <td colspan="2" style="font-size: 11px;">2. Field 59 of MT103 is an <b style="font-weight: bold;">"Account
                 Number"</b> with value: <b style="font-weight: bold;"> /011105002975</b>. Must be
             captured
             correctly.</td>
     </tr>


     <tr>
         <td colspan="2" style="font-size: 11px;">3. Field 70 of MT103 is a <b style="font-weight: bold;">"Control
                 Number" </b> with value: <b style="font-weight: bold;">/ROC/<?= $data[0] ?></b>. Must
             be
             captured
             correctly.</td>
     </tr>
 </table>