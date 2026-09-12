---
title: EOS CSV Import and Export
description: More in depth guide on the CSV Import and Export function of ETC EOS
draft: true
---

# About ETC EOS CSV Import
The EOS Desk allows you to import/export data from the desk using CSV format. It's human readable and you can totally edit it yourself!
[Click here to download the EOS CSV Import Template](/public/programming/EOSCSVImportTemplate.csv)

## Rows
Line 1 is always "START_TARGETS"
Line 2 is column headers (listed below)
Line 3 and onwards in your data
The final Line is always "END_TARGETS"

## Columns
There's not really a lot of documentation about how this file works - but here's the list of the column headers.  You can leave anything blank if you don't need it!


| Column | Data type | Description |
| --- | --- | --- |
| TARGET_TYPE | Number | A numerical value for what type of data the row contains. You'll need a Cue_List (15) and the Cues (1). |
| TARGET_TYPE_AS_TEXT | String | The Text version of the above. So if you put 15 for the one above, it's "Cue_List", or for 1, it's "Cue" |
| TARGET_LIST_NUMBER | Number | For Cue_List, leave it blank. For Cue, the target should be 1 (indicating Cue List 1) |
| TARGET_ID | Number | For Cue_List, set it to 1. For the Cues, this is where you put your cue number as a number only! So LX15 is just "15" |
| TARGET_DCID | String | Leave this blank - EOS assigns this value when you upload the sheet (you'll see it if you export a CSV from EOS) |
| PART_NUMBER |  | If you've got part cues, this is where that goes |
| LABEL | String | This is where you'd put the trigger text for the cue eg. "When curtains open" |
| TIME_DATA | Number | This is like when you set a time for the cue without any other values. So all the below values if not set, are the same as this. |
| UP_DELAY | Number | Intensity Up Time |
| DOWN_TIME | Number | Intensity Down Time |
| DOWN_DELAY | Number | Intensity Down Delay |
| FOCUS_TIME | Number | Focus Time |
| FOCUS_DELAY | Number | Focus Delay |
| COLOR_TIME | Number | Color time |
| COLOR_DELAY | Number | Color Delay |
| BEAM_TIME | Number | Beam Time |
| BEAM_DELAY | Number | Beam Delay |
| DURATION | Number | Duration of Cue |
| ALERT_TIME |  | ?? |
| MARK | Blank, or M | If it's a cue with a Mark in it |
| BLOCK | Blank, or b | If it's a Blocking cue |
| ASSERT |  | TODO |
| ALL_FADE |  | TODO |
| PREHEAT |  | TODO |
| FOLLOW | Blank, or F1 or H1 | If the cue has a Follow or a Hang and how many seconds. Eg. F10 = Follow 10 Sec |
| LINK |  | If the cue is linked to another cue |
| LOOP |  | Looping |
| CURVE |  | ?? |
| RATE |  | ?? |
| EXTERNAL_LINKS |  | ?? |
| EFFECTS |  | If there's an effect on the cue (Note - this doesn't have enough information to actually *set* the effect when you import the cue - Leave this blank) |
| MODE |  | ?? |
| CUE_NOTES |  | Where you would put notes about the cue - ie. What the cue does. "Turn on front wash" |
| SCENE_TEXT |  | To break your cues into scenes to make it easier to read - The first cue in the scene should have text here (Eg. "Scene 1 - Eating Cats") |
| SCENE_END |  | ?? |
| WIDTH |  | ?? |
| HEIGHT |  | ?? |