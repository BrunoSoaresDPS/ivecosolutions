import { useLanguage } from "@/contexts/LanguageContext";

const OneDrive = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-xl font-bold">One Drive</h1>
        <p className="text-sm opacity-80">{t.oneDriveDescription}</p>
      </div>
      <div className="w-full h-[calc(100vh-80px)]">
        <iframe
          src="https://ivecogroup-my.sharepoint.com/personal/thiago_radieddine_ivecogroup_com/_layouts/15/onedrive.aspx?FolderCTID=0x012000A774C570768EA4408986752FA838C59D&view=0"
          className="w-full h-full border-0"
          title="One Drive"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default OneDrive;
