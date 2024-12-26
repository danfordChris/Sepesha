
    <table id=" " class="table table-sm table-bordered table-stripped table-condensed">
    <thead class="thead-info" style="font-size: small;">
              <tr>
                  <th>S/N</th>
                  <th>STAGE</th>
                  <th>STATUS</th>
                  <th>COMMENT</th>
                  <th>DONE BY</th>
                  <th>DONE ON</th>
              </tr>

          </thead>
            <tbody>
            <?php foreach ($approvals as $y=> $appV): ?>
                <tr>
                <td><?= $y+1 .'.';?></td>
                <td><?= $appV->wfsname;?></td>
                <td><?= $appV->wfstatus?></td>
                <td><?= $appV->comments;?></td>
                <td><?= isset($appV->created)?$appV->created->fullname:'';?></td>
                <td> <?= date('d/m/Y H:i:s',strtotime($appV->cdate));?></td>



                </tr>
                <?php endforeach ?>
            </tbody>
        </table>
