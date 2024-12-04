const Discord = require('discord.js');
const Canvas = require('@napi-rs/canvas');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('robloxban')
        .setDescription('Generate a Roblox ban message.')
        .setIntegrationTypes(1)
        .setContexts(0, 1, 2)
        .addStringOption(option =>
            option.setName('item')
                .setMaxLength(60)
                .setDescription('Offensive item from ban note. (60 characters max)')
                .setRequired(true)),
    async execute(interaction) {

        try {

            await interaction.reply({ content: "Generating..." })

            var item = interaction.options.getString('item');

            const canvas = Canvas.createCanvas(998, 620);
            const context = canvas.getContext('2d');

            var image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+YAAAJsCAMAAABH4kkfAAAAx3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDRDQMhCP13io6AgIjjeHc26QYdvyianJe+RMAHPoHQvp93eHVg5MApqxQRMHDhgtUCBUcdNgIPO9AEaLIbH+QEHBEa1Uu8DFTcx8XPB8vHalG6Cek5E8eeKOwe9SE0P6LeUW/hmkJlChF6Ik6B6mOBFM33EY4GO9RP6Iayj7dEnnfOtr0rGUmIjSKBWSL1BqgfDlQtgWatWSuMlCxmksGvUW0h//a0EH6In1mMZy/WMAAAAYVpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNQFIVPU6UiFQcriHTIUF20i4o4lioWwUJpK7TqYPLSP2jSkKS4OAquBQd/FqsOLs66OrgKguAPiLODk6KLlHhfUmgR44XH+zjvnsN79wFCs8pUsycGqJplpBNxMZdfFQOvCMKHYUwgLDFTT2YWs/Csr3vqpbqL8izvvj9rQCmYDPCJxDGmGxbxBvHspqVz3icOsbKkEJ8TTxp0QeJHrssuv3EuOSzwzJCRTc8Th4jFUhfLXczKhko8QxxRVI3yhZzLCuctzmq1ztr35C8MFrSVDNdphZHAEpJIQYSMOiqowkKUdo0UE2k6j3v4Rx1/ilwyuSpg5FhADSokxw/+B79naxanp9ykYBzofbHtjzEgsAu0Grb9fWzbrRPA/wxcaR1/rQnMfZLe6GiRI2BwG7i47mjyHnC5A4w86ZIhOZKfllAsAu9n9E15YOgW6F9z59Y+x+kDkKVZLd8AB4fAeImy1z3e3dc9t3972vP7AcQRcscNjt9IAAANdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDpiMTM4YTAzMS0yYmUzLTRlNGEtYmViYy01MDAxYzBmNDhmMDAiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjM4ZDNmM2YtNzc0MC00MjIwLTkyODgtMzliYTdhZDQ1ZDZiIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MzU3MTY1ODUtNzdkYS00ODY2LWI3ZjMtNGYyOTc2MDhkYmVjIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MzMwODk1NzU4ODQ2MTIiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zOCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQ6MTI6MDFUMTU6NDY6MTUtMDY6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI0OjEyOjAxVDE1OjQ2OjE1LTA2OjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGMwMDY2ZjAtNTgzZi00YmI3LThiMjEtODQ4YzhjN2UyOWJlIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTEyLTAxVDE1OjQ2OjE1Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PkTZIOsAAAMAUExURZp+XvTiy595PTk7PUlVVsbs/mlTQZTN89qsVuD//zKs1zxIZb3j/P/+9TlLgztWhv///5M7PW2ElDlkv6m2vbWTaDlekLlzPa+NPY5ePf713IXF7LankDea/52bkL2+vvH9/re8vau9vsuRPSMlJ/3gt5y5vsTFxfDKkDl34DSNpbSff0hwl722oDk7tHpJPTtlklpdXPfVo72ykZutsZtyP1M7PTV1PTxTbzlxk4BzaF1BPcTDsDV3cFKHrZ+wu7GXdGeTtbitnr2tiklkf729uKC+vnA+PU5DPjk8R62rnzldzd+0PTO1/72+soFLPYdWPbTExTWv/zpNekM8PZucnXKSq1l5lOLGojk7Xr29oY6xvjk7e1Jqg3l+c4ltU56McneOoFeazs7z/9/d4HmhvoGnvjZdPaaBS6uIVkhaa0p5oTk7k2N3lbG+vTpEUTiI8lJUVluOssubW0NadVSt3KrJ31JUcf/yzDib00aBp3k7PTk9dJqDgDlVp9aiPTSYvrGO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"

            // Draw Image
            const background = await Canvas.loadImage(image);
            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            // Review date (current date & time)
            let ts = Date.now();

            let date_time = new Date(ts);
            let date = date_time.getDate();
            let month = date_time.getMonth() + 1;
            let year = date_time.getFullYear();

            let time = date_time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: "America/Chicago" })

            let ReviewTime = month + "/" + date + "/" + year + " " +time

            context.font = 'bold 20px Gotham';
            context.fillStyle = '#bdbebe';
            context.fillText(ReviewTime, canvas.width / 7.85, canvas.height / 3.04);

            // CT
            context.font = 'light 20px Gotham';
            const mesText = context.measureText(ReviewTime).width
            context.fillText(" (CT)", (canvas.width / 7.1 + mesText), canvas.height / 3.04);

            // Offensive Item
            context.font = 'bold 20px Gotham';
            context.fillStyle = '#bdbebe';
            context.fillText(item, canvas.width / 5.10, canvas.height / 1.755);

            const attachment = new Discord.AttachmentBuilder(await canvas.encode('png'), { name: 'image.png' });

            const newEmbed = new Discord.EmbedBuilder()
                .setTitle('Generated Ban')
                .setImage('attachment://image.png')

            await interaction.editReply({ content: '', embeds: [newEmbed], files: [attachment] })

        }
        catch (err) {
            console.warn(err)
            await interaction.editReply({ ephemeral: true, content: "There was an error during the command!" })
        };

    },
};