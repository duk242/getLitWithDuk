---
title: Exporting Cues from CuePad to EOS
description: How to export cues from CuePad and import them into EOS using CSV Import
---

This is a quick guide on how to export cues from CuePad, then import them into an ETC EOS lighting desk.
It requires the paid version of CuePad to access the export function!

This does also double as a guide on how to import cues into an EOS Desk using the CSV import function too!

# About ETC EOS CSV Import
The EOS Desk allows you to import/export data from the desk using CSV format. It's human readable and you can totally edit it yourself!
[Click here to download the EOS CSV Import Template](/public/programming/EOSCSVImportTemplate.csv)

I've got some notes about how the file works in [more detail here](../../reference/eos-csv-files.md).

## Rows
Line 1 is always "START_TARGETS"
Line 2 is column headers (listed below)
Line 3 will be your Cue_List.  On this line set `TARGET_TYPE` to `15`, `TARGET_TYPE_AS_TEXT` to `Cue_List`, `TARGET_ID` to `1` and `LABEL` to what you want to call your cue list
Line 4 and onwards is your cues
The final Line is always "END_TARGETS"

## For each Cue Row
| Field | Description |
| --- | --- |
| TARGET_TYPE | `1` |
| TARGET_TYPE_AS_TEXT | `Cue` |
| TARGET_LIST_NUMBER | `1` |
| TARGET_ID (Number) | This is where you put your cue number as a number only! So LX15 is just `15` |
| LABEL (String) | This is where you'd put the trigger text for the cue eg. `When curtains open` |
| CUE_NOTES | Where you would put notes about the cue - ie. What the cue does. `Turn on front wash` |
| SCENE_TEXT | To break your cues into scenes to make it easier to read - The first cue in the scene should have text here (Eg. `Scene 1 - Eating Cats`) |

Everything else just leave blank!

# Method 1 - Doing it by Hand
This is how to do it by hand, using Excel to edit the data to suit the EOS desk format.
1. Export your cues from Cuepad by opening your script, going to Export -> CSV (Cue Data) and selecting just Lighting Cues.
2. Grab the [EOSCSVImportTemplate.csv](/programming/EOSCSVImportTemplate.csv) from above
3. Edit the third row of the EOS CSV to name your script.
4. Copy the data from CuePad CSV to the EOS CSV as follows (From Row 4 of the EOS CSV)

| CuePad CSV Column | EOS CSV Column | Notes |
| --- | --- | --- |
| Cue Number | TARGET_ID | Can only be a number - remove the `LX` part! |
| Cue Trigger | LABEL | No commas or linebreaks! |
| Cue Text | CUE_NOTES | No commas or linebreaks! |

And for the following cells, enter this:

`TARGET_TYPE` = `1`

`TARGET_TYPE_TEXT` = `Cue`

`TARGET_LIST` = `1`

`SCENE_TEXT` = For the first cue of each scene, enter this in here (much easier doing it here than within the EOS software!)

## Find and Replace for the Line Breaks
If you're using Excel: Press Ctrl-H to Find & Replace, click the Replace Tab
**Replace commas:**
Find: `,`
Replace With: ` - `

**Remove LX from Cue numbers**
Find: `LX`
Replace With: Leave Blank

**Replace Line breaks (Windows)**
Find: Press Ctrl-J 
Replace With: ` - `

**Replace Line Breaks (Mac)**
Don't know why this has to be so difficult!

Go to Cell H2 and use this formula:
`=SUBSTITUTE(F2, CHAR(10), " - ")`
Then fill down


# Method 2 - Automatic!
This is how to do it by hand, using Excel to edit the data to suit the EOS desk format.
1. Export your cues from CuePad by opening your script, going to Export -> CSV (Cue Data) and selecting just Lighting Cues.
2. [Click here to go to CuePad to EOS Converter Script](/programming/cuePadToEOS.html)
3. Upload your CuePad File - it will then convert it and download the EOS file ready to go.

Side note: This runs entirely in browser - If you're worried about uploading stuff, you can just view source on the CuePad to EOS page!