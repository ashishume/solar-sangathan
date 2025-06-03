import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import WorkingCommittee from "./WorkingCommittee";
import OtherMembers from "./OtherMembers";

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">About Page</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage working committee members and other members of Solar
            Sangathan.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Tabs defaultTab="working-committee">
          <TabsList>
            <TabsTrigger id="working-committee">Working Committee</TabsTrigger>
            <TabsTrigger id="other-members">Other Members</TabsTrigger>
          </TabsList>

          <TabsContent id="working-committee">
            <WorkingCommittee />
          </TabsContent>

          <TabsContent id="other-members">
            <OtherMembers />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
